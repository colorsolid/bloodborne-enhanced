# -*- coding: utf-8 -*-
def t242480_1():
    """State 0"""
    while True:
        """State 1"""
        call = t242480_x6(z1=1221, z2=1222, z3=6001, z4=6001)
        assert IsClientPlayer() == 1
        """State 2"""
        call = t242480_x5()
        assert not IsClientPlayer()

def t242480_x0(z6=99999, z7=99999, z8=99999, z9=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z6, 0) == 1 or CheckSpecificPersonMenuIsOpen(z7, 0) == 1 or CheckSpecificPersonMenuIsOpen(z8,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z9, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t242480_x1(actionbutton1=6026, flag2=6000, flag3=6001, flag4=6001, flag5=6001, flag6=6001, flag7=6001,
               flag8=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag2) == 1 or GetEventStatus(flag3) == 1 or GetEventStatus(flag4) ==
                1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6) == 1 or GetEventStatus(flag7)
                == 1 or GetEventStatus(flag8) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag2) and not GetEventStatus(flag3) and not GetEventStatus(flag4) and
            not GetEventStatus(flag5) and not GetEventStatus(flag6) and not GetEventStatus(flag7) and
            not GetEventStatus(flag8)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t242480_x2(gesture1=20, z5=820, flag1=6760):
    """State 0,2"""
    DebugEvent('ジェスチャー取得判定')
    if GetEventStatus(flag1) == 1:
        pass
    else:
        """State 1"""
        OpenItemAcquisitionMenu(3, z5, 1)
        AcquireGesture(gesture1)
        SetEventState(flag1, 1)
        assert not IsMenuOpen(63)
    """State 3"""
    SetTalkTime(0.33)
    return 0

def t242480_x3():
    """State 0,1"""
    assert t242480_x2(gesture1=20, z5=820, flag1=6760)
    """State 2"""
    return 0

def t242480_x4():
    """State 0,3"""
    Label('L0')
    call = t242480_x0(z6=99999, z7=99999, z8=99999, z9=99999)
    if call.Done():
        pass
    elif call.Done():
        pass
    """State 4"""
    return 0
    """Unused"""
    """State 1"""
    Label('L1')
    TalkToPlayer(1400300, -1, -1)
    assert HasTalkEnded() == 1 or GetDistanceToPlayer() > 15
    Goto('L0')
    """State 2"""
    DebugEvent('立ち去り会話')
    Goto('L1')

def t242480_x5():
    """State 0,1"""
    DebugEvent('クライアント待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t242480_x6(z1=1221, z2=1222, z3=6001, z4=6001):
    """State 0"""
    while True:
        """State 1"""
        DebugEvent('ジェスチャー取得済み判定')
        assert not GetEventStatus(6760)
        """State 4"""
        call = t242480_x1(actionbutton1=6026, flag2=6000, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
                          flag7=6001, flag8=6001)
        if call.Done():
            """State 3"""
            DebugEvent('サブステート：通常会話')
            call = t242480_x3()
            def ExitPause():
                SetEventState(72400513, 0)
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                """State 2"""
                DebugEvent('サブステート：会話範囲外')
                assert t242480_x4()
        elif GetEventStatus(6760) == 1:
            pass
    """Unused"""
    """State 5"""
    return 0

